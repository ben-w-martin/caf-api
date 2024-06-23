
import * as PropTypes from 'prop-types'

function CarouselCoffee(props) {
    const {coffee} = props

    return <>
        <div className="carousel-coffee">
            <div className="carousel-coffee__img">
                <img src="#" alt="coffee" />
            </div>
            <div className="carousel-coffee__name">
                {coffee.name}
            </div>
        </div>
    </>
}

CarouselCoffee.propTypes = {
    coffee: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        roaster: PropTypes.string
    })
}

export {CarouselCoffee}