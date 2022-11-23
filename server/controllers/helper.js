composeMatch = (filterCondition) => {
    const match = {};
    if(!filterCondition) return match;
    //TODO: Add additional validation on filterCondition format
    const filterParts = filterCondition.split(":");
    const filterField = filterParts[0];
    const filterValue = filterParts[1];
    match[filterField] = {
        $eq:filterValue
    }
    return match;
}
composeGroup = (groupInput, numericField) => {
    let group = {};
    if(!groupInput && !numericField) return group;
    //TODO further validation for group Input;
    const groupFieldName = groupInput||'staticVal';
    group = {
        _id:groupFieldName,
        mean:{ $avg: "$"+numericField},
        min:{ $min: "$"+numericField},
        max:{ $max: "$"+numericField},
    }
    console.log("Before returning group", group);
    return group;
}
module.exports = {
    composeMatch,
    composeGroup
}