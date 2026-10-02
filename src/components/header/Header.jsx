import "./header.css"

export default function Header() {
    return (
        <header>
            <div className="top-box">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></p>

                <select name="" id="">
                    <option value="">En</option>
                    <option value="">Ru</option>
                    <option value="">Uz</option>
                </select>
            </div>

            <div className="header-flex">
                <h1>Exclusive</h1>

                <div className="p-flex">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign in</p>
                </div>

                <div className="right-block">
                    <input type="text" name="" id="" placeholder="What are you looking for?" />

                    <div>
                        <button class="icon-btn" type="button" aria-label="Избранное">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                            </svg>
                        </button>

                        <button class="icon-btn" type="button" aria-label="Корзина">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M1 2h3l3 14h13M5 5h17l-2 9H6.6" />
                                <circle cx="8" cy="21" r="1" />
                                <circle cx="19" cy="21" r="1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
