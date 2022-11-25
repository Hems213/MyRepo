
composeMatch = (filterCondition) => {
    const match = {};
    if (!filterCondition) return match;
    //TODO: Add additional validation on filterCondition format
    const filterParts = filterCondition.split(":");
    const filterField = filterParts[0];
    const filterValue = filterParts[1];
    match[filterField] = {
        $eq: filterValue
    }
    console.log("Match data", match);
    return match;
}
composeGroup = (groupInput, numericField) => {
    //if(!groupInput && !numericField) return group;
    //TODO further validation for group Input;
    let numberField = numericField || 'salary';
    const group_key = getGroupId(groupInput);
    let group = {
        _id: group_key,
        mean: { $avg: "$" + numberField },
        min: { $min: "$" + numberField },
        max: { $max: "$" + numberField },
    }
    console.log('adding group to groups', group);
    return group;
}
getGroupId = (groupInput) => {
    if (!groupInput) return 'fulldata';
    const groupInputs = groupInput.split(".");
    const group_key = {};
    groupInputs.forEach(
        (columnName) => {
            //TODO validate column name and throw error if invalid
            //validateColumnName(columnName)
            group_key[columnName] = '$' + columnName;
        }
    )
    return group_key;

}
constructPipeline = (queryInput) => {
    const filterCondition = queryInput.filter;
    const criteria = composeMatch(filterCondition);
    const groupDetails = queryInput.aggregateOn;
    const numericField = queryInput.numericField;
    const group = composeGroup(groupDetails, numericField);
    const pipeline = [];
    pipeline.push({ $match: criteria });
    pipeline.push({ $group: group });
    console.log('before returing the pipeline', pipeline)
    return pipeline
}
module.exports = {
    composeMatch,
    composeGroup,
    constructPipeline
}