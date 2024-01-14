import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl ='https://abino-folly.vercel.app/api/v1/'
export const abinoSlice =createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl,headers: {'Content-Type': 'application/json',},}),
    tagTypes:['abino'],
    endpoints:(builder)=>({
        getSingleUser:builder.query({
            query:(id)=> '/auth/singleUser?id='+id,
            providesTags:['abino']
        }),
        getUserSignUp:builder.mutation({
            query:(signUnData)=>({
                url:'auth/SignUp',
                method:"POST",
                body:signUnData, 
            }),
            invalidatesTags:['abino']
        }),
        getUserSignIn:builder.mutation({
            query:(signInData)=>({
                url:'auth/SignIn',
                method:"POST",
                body:signInData,
                headers: {
                    Authorization: `Bearer`, 
                  },
            }),
            invalidatesTags:['abino']
        })
    })
})


export const { useGetSingleUserQuery, useGetUserSignInMutation,useGetUserSignUpMutation } = abinoSlice;