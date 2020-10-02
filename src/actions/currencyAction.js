import axios from "axios";

export function getLatest() {
    return axios.get("https://api.exchangeratesapi.io/latest?base=IDR")
    .then(res => res.json()) // Short typo for response.
      .then(
        result => {
          this.setState({
            isLoaded: true,
            rates: result.rates
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    };