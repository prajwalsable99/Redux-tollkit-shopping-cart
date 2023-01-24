import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const STATUSES=Object.freeze(
    {
        IDLE:"idle",
        ERROR:"error",
        LOADING:"loading"
    }
)
const productsSlice=createSlice({
    name:'products',
    initialState:{
        data:[],
        status:STATUSES.IDLE

    },
    reducers:{

        
    },
    extraReducers:(builder)=>{

        builder
        .addCase(fetchprods.pending,(state,action)=>{
            state.status=STATUSES.LOADING;

        })
        .addCase(fetchprods.fulfilled,(state,action)=>{
            state.status=STATUSES.IDLE;
            state.data=action.payload;

        })
        .addCase(fetchprods.rejected,(state,action)=>{
            state.status=STATUSES.ERROR;

        });
    },


    
});

export const fetchprods =createAsyncThunk('ftech/products',async()=>{

    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;

})
export default productsSlice.reducer;