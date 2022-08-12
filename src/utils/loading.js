/**
 * @author MaZiXiao
 * @date 2022-08-11 20:14
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})

export const loading = {
    start() {
        NProgress.start()
        //store.commit('startLoading')
    },
    done() {
        NProgress.done()
        //store.commit('closeLoading')
    }
}
