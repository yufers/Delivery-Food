const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overrlay')
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overrlay') ||
            event.target.closest('.cart-modal__header--close')) {
            closeModal()
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            tytle: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца '
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html" class="products-card">
                <div class="products-card__image">
                    <img src="./images/rests/PizzaPlus.jpg" alt="PizzaPlus">
                </div>
                <div class="products-card__description">
                    <div class="products-card__description-row">
                        <h4 class="products-card__description--title">Пицца плюс</h4>
                        <div class="products-card__description--badge">50 мин</div>
                    </div>
                    <div class="products-card__description-row">
                        <div class="products-card__description-info">
                            <div class="products-card__description-info--raiting">
                                <img src="./images/icons/star.svg" alt="star">
                                4.5
                            </div>
                            <div class="products-card__description-info--price">
                                От 900 ₽
                            </div>
                            <div class="products-card__description-info--group">
                                Пицца
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            `)
        })
    }

    loading()

    setTimeout(() => {
        randerRests(restArray)
    }, 2000)
}

modalFunc()
restsFunc()

