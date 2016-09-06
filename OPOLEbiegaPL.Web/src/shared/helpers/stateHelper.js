module.exports = {
    setFriend: function (nextProps) {
        return {
            Id: nextProps.Id,
            Name: nextProps.Name,
            ImageURL: nextProps.ImageURL
        }
    },
    setPerson: function (nextProps) {
        return {
            Id: nextProps.Id,
            ImageURL: nextProps.ImageURL,
            Description: nextProps.Description,
            FirstName: nextProps.FirstName,
            LastName: nextProps.LastName,
            Achievements: nextProps.Achievements
        }
    },
}