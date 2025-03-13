// const React = {}
// const MessageType = {}


// type HandleMessage = (
//     chatMessage: ChatMessage,
//     setMessages: any
//   ) => void;


// type HandleSendMessage = HandleMessage extends (...args: infer U) => infer R ? (...args: U, setInput: any) => R: never;

// //type aa = (...U: Parameters<typeof HandleMessage>, setInput: any ) => void


// const x: aa = ()

// export interface ChatMessage {
//     message: string;
//     sessionId: string;
//     type: MessageType;
//   }
  
//   interface HandleMessage {
//     (
//       chatMessage: ChatMessage,
//       setMessages: any
//     ): void;
//   }
  
//   export interface HandleSendMessage extends HandleMessage {
//     (
//       setInput: any
//     ): void;
//   }
  
  //const a: HandleMessage = ();
  //const c: HandleSendMessage = function( {}, {}, "teste") => { return;};

//   type f1 = (
//     chatMessage: string,
//     setMessages: number
//   ) => void;

//   type aa = f1 extends (...args: Parameters<f1>) => infer R ? (setInput: any, ...args: Parameters<f1>) => R: never; //U: Parameters<typeof f1>, setInput: any ) => void


//   const a: aa = function (string,  number, setInput: any) {return}


// declare function base(a: number, b: number, c: number): number
// declare function derived(add: string, ...base: Parameters<typeof base>): number



// type HandleMessage = (
//     chatMessage: ChatMessage,
//     setMessages: any
// ) => void;

// type HandleSendMessage  = HandleMessage extends (...a: any[]) => infer R ? (...a:[...U: Parameters<HandleMessage>, setInput: any]) => R: never;



// type BaseWithB  = BaseFunc extends (...a: infer U) => infer R ? (...a:[...U, number]) => R: never;

// // with names
// type BaseWithB2  = BaseFunc extends (...a: any[]) => infer R ? (...a:[...U: Parameters<BaseFunc>, arg3: number]) => R: never;

// const a: BaseWithB2 = ()