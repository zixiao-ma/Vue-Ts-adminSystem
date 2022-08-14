interface TagsType {
    path: string,
    title: string,
    key: string
}

interface TagsStateType {
    tagsView: Array<TagsType>;
}

export {TagsType, TagsStateType};
