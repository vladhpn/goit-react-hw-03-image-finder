export interface IHits {
    id: string
    webformatURL:string
    largeImageURL: string
    tags: string
  }
  
 export interface IEvent{
      target: {
          dataset: {
              source: string;
          };
      };
  }