(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {

       const fruitsNames :string[]  = ['manzana', 'cereza', 'ciruela'];        
       return fruitsNames.includes(fruit);
        
       
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        return (color === 'red') ? ['manzana', 'fresa'] :
               (color === 'yellow') ? ['piña', 'banana'] :
                (color === 'purple') ? ['moras', 'uvas'] :
                (() => { throw new Error("the color must be: red, yellow, purple") })();

    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        return isFirstStepWorking ? 'first step working' :
            isSecondStepWorking ? 'second step working' :
            isThirdStepWorking ? 'third step working' :
            isFourthStepWorking ? 'fourth step working' :
            (() => { throw new Error('All steps broken') })();
    }
    


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();   