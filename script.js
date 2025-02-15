const {ref, onMounted} = Vue
Vue.createApp({
    setup(){
        let data = ref([])
        const getData = async() => {
            let resquest = await fetch("data.json")
            let json =  await resquest.json()
            data.value = json.data            
        }
        onMounted(() => {
            getData()
        })
        return {data}
    }
}).mount("#app")