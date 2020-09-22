import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div class="hamburger">
            <div class="line" ></div>
            <div class="line" ></div>
            <div class="line" ></div>
          </div>

          <div class="brand-name">
            <a href="#">
              Khareed Lo!
                </a>
          </div>




          <form class="Form">
            <input type="search" placeholder="Search" aria-label="Search"/>
              <button type="submit">Search</button>
          </form>

            <ul class="navbar-links">

              <li><a href="#" ><span class="fas fa-sitemap"></span> Categories</a></li>

              <li><a href="#"><span class="fas fa-cart-arrow-down"></span>Shopping Cart</a></li>

              <li><a href="#" ><span class="fas fa-sign-in-alt"></span> Login</a></li>

            </ul>
                   
    </nav>
  </header>
        <div class="container">
          <main class="main">
            <div class="content">
              <ul class="items">
                <li>
                  <div class="item">
                    <img src='../Images/p1.jpeg' alt='pic'/>
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img class="item-image" src="Images/p2.jpeg" alt='' />
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img class="item-image" src="./Images/p3.jpeg" alt='' />
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img class="item-image" src="../Images/p4.jpeg" alt='' />
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img class="item-image" src="./Images/p5.jpeg" alt='' />
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img class="item-image" src="../Images/p6.jpeg" alt='' />
                    <div class="item-name">
                      Laptop
            </div>
                    <div class="item-brand" >HP</div>
                    <div class="item-price">14000 Rs</div>
                    <div class="item-review">4.5 Stars (reviews)</div>
                  </div>
                </li>
              </ul>
            </div>
          </main>
        </div> 
  </div>
  );
}

export default App;
