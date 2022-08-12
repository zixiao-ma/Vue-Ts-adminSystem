type routeType = {
    path: string,
    name: string,
    component?: Function,
    redirect?: string,
    meta?: {
        title: string,
        icon: string | undefined
    },
    children: Array<object>
}

function isNull(data: Array<object>) {
    if (!data) return true;
    if (JSON.stringify(data) === '{}') return true;
    if (JSON.stringify(data) === '[]') return true;
    return false;
}

export function getRouters(router: Array<object>) {
    const result: Array<object> = [];
    router.forEach((item: any) => {
        let obj: routeType;
        if (isNull(item.children)) {
            return;
        } else {
            obj = {
                path: item.path,
                name: item.path,

                meta: {
                    title: item.menuName,
                    icon: item.icon
                },
                children: []
            };
            if (!item.icon) {
                obj.component = () => import(`../views${item.path}/index.vue`);
            }
            result.push(obj);

        }
        if (item.children && item.children.length > 0) {
            obj.redirect = item.children[0].path;
            obj.children.push(...getRouters(item.children));
            return;
        }

    });
   
    return result;
}
