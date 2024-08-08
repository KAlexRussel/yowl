import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyComments from '@/views/MyComments.vue'
import CreateComment from '@/views/CreateComment.vue'
import EditComment from '@/views/EditComment.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import AComment from '@/views/AComment.vue'
import NotFound from '@/views/NotFound.vue'
import CommentsView from '@/views/CommentsView.vue'
import Dashboard from '@/views/DashboardView.vue';
import AdminProfile from '@/views/AdminProfile.vue';
import EditProfile from '@/views/EditProfile.vue';
import UserProfile from '@/views/UserProfile.vue';
import EditUserProfile from '@/views/EditUserProfile.vue';
import ManageCategories from '@/views/CategoriesView.vue';
import ManageComs from '@/views/ManageComments.vue';
import Users from '@/views/AllUsers.vue';


const user = JSON.parse(localStorage.getItem("user"))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView,
      meta:{ isAuth:true}
    },
    {
      path: '/mycomments',
      name: 'mycomments',
      component: MyComments,
      meta:{ isAuth:true}
    },
    {
      path: '/comment/:id',
      name: 'acomment',
      component: AComment,
      meta:{ isAuth:true}
    },
    {
      path: '/comments/edit/:id',
      name: 'editcomment',
      component: EditComment,
      meta:{ isAuth:true}
    },
    {
      path: '/comments/create',
      name: 'createcomment',
      component: CreateComment,
      meta:{ isAuth:true}
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound
    },
    { 
      path: '/dashboard', 
      name: 'dashboard', 
      component: Dashboard,
      meta:{ isAuth:true,isAdmin:true}
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: AdminProfile,
      meta:{ isAuth:true,isAdmin:true}
    },
    { 
      path: '/userprofile', 
      name: 'userprofile', 
      component: UserProfile,
      meta:{ isAuth:true}
    },
    { 
      path: '/editprofile', 
      name: 'editprofile', 
       component: EditProfile,
      meta:{ isAuth:true,isAdmin:true}

    }  ,

    { 
      path: '/edituprofile', 
      name: 'edituprofile', 
      component: EditUserProfile,
      meta:{ isAuth:true}
    },
    { 
      path: '/manageCat', 
      name: 'manageCat', 
      component: ManageCategories,
      meta:{ isAuth:true,isAdmin:true}
    },
    { 
      path: '/manageComs', 
      name: 'manageComs', 
      component: ManageComs,
      meta:{ isAuth:true,isAdmin:true}
    },
    { 
      path: '/manageUsers', 
      name: 'manageUsers', 
      component: Users,
      meta:{ isAuth:true,isAdmin:true}
    }

  ]
})


// router.beforeEach((to, from, next) => {
//   // instead of having to check every route record with
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.isAuth) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//       next({path: '/login'})
//       // save the location we were at to come back later
//     } else {
//       next()
//     }
  
// })
router.beforeEach((to,next) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.isAuth && !localStorage.getItem("user") ) {

    if (to.meta.isAdmin && user.user.isadmin == 0) {

      return next("/comments")
    }


    return {
     path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
  
})

export default router
