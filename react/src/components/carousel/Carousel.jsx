import { useState, useEffect } from "react";
import * as carouselCoffeeService from '../../services/coffeeCarouselService';
import { CarouselCoffee } from "./CarouselCoffee";

function Carousel() {
    const [coffees, setCoffees] = useState({
        data: [],
        components: []
    });

    useEffect(() => {
        getCoffees()
    }, [])

    useEffect(() => {
        setCoffees(prev => {
            const newCoffees = {...prev}
            newCoffees.components = coffees.data.map(coffeeMapper)
            return newCoffees
        }) 
       }, [coffees.data])

    function coffeeMapper(coffee) {
        return <CarouselCoffee key={coffee.id + "-" + coffee.name} coffee={coffee} />
    }

    const getCoffees = () => {
        carouselCoffeeService.getAll()
            .then(onGetAllCarouselCoffeesSuccess)
            .catch(onGetAllCarouselCoffeesError)
    }

    const onGetAllCarouselCoffeesSuccess = (response) => {
        console.log("onGetAllCarouselCoffeesSuccess", response);
        const {coffees} = response

        setCoffees(prev => {
            const newCoffees = {...prev}
            newCoffees.data = coffees
            return newCoffees
        })
    }

    const onGetAllCarouselCoffeesError = (error) => {
        console.error("onGetAllCarouselCoffeesError", error);
    }

    return <>
    <div className="carousel">
    {coffees.components}
    </div>
    </>
}

export {Carousel}