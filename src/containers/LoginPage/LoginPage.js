import { Component } from "react";

export class LoginPage extends Component {

    goToBlog = () => {
      this.props.history.push('/blog')
      }

        render() {
          console.log(this.props);
            return (
                <>
                  <h1>страница входа в систему</h1>
                  <form action="">
                    <div>
                      <input type="text" name="Login" placeholder="Login" />
                    </div>
                    <div>
                      <input type="text" name="password" placeholder="password" />
                    </div>
                    <div>
                      <button type="button" onClick={this.goToBlog}>
             Вход
                      </button>
                    </div>
                  </form>
                </>
              );
        }

  
   
  };