import {environment} from "../../environments/environment";

const {apiKey, API} = environment;

const urls = {
  weather: `${API}?key=${apiKey}&q=`
}

export {
  urls
}
