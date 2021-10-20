it('nenhum teste ainda', () => {})

    const getSomething = () => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                 resolver(13);
            },2000)

        })
}



const system = async () => {
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
    }

system();
