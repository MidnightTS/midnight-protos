"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RechargeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ShopConcertProduct_1 = require("./ShopConcertProduct");
const PlayProduct_1 = require("./PlayProduct");
const ShopCardProduct_1 = require("./ShopCardProduct");
const ShopMcoinProduct_1 = require("./ShopMcoinProduct");
// @generated message type with reflection information, may provide speed optimized methods
class RechargeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("RechargeReq", [
            { no: 10, name: "mcoin_product", kind: "message", T: () => ShopMcoinProduct_1.ShopMcoinProduct },
            { no: 4, name: "card_product", kind: "message", T: () => ShopCardProduct_1.ShopCardProduct },
            { no: 3, name: "play_product", kind: "message", T: () => PlayProduct_1.PlayProduct },
            { no: 11, name: "concert_product", kind: "message", T: () => ShopConcertProduct_1.ShopConcertProduct }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ShopMcoinProduct mcoin_product */ 10:
                    message.mcoinProduct = ShopMcoinProduct_1.ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options, message.mcoinProduct);
                    break;
                case /* ShopCardProduct card_product */ 4:
                    message.cardProduct = ShopCardProduct_1.ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options, message.cardProduct);
                    break;
                case /* PlayProduct play_product */ 3:
                    message.playProduct = PlayProduct_1.PlayProduct.internalBinaryRead(reader, reader.uint32(), options, message.playProduct);
                    break;
                case /* ShopConcertProduct concert_product */ 11:
                    message.concertProduct = ShopConcertProduct_1.ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options, message.concertProduct);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* ShopMcoinProduct mcoin_product = 10; */
        if (message.mcoinProduct)
            ShopMcoinProduct_1.ShopMcoinProduct.internalBinaryWrite(message.mcoinProduct, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ShopCardProduct card_product = 4; */
        if (message.cardProduct)
            ShopCardProduct_1.ShopCardProduct.internalBinaryWrite(message.cardProduct, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* PlayProduct play_product = 3; */
        if (message.playProduct)
            PlayProduct_1.PlayProduct.internalBinaryWrite(message.playProduct, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ShopConcertProduct concert_product = 11; */
        if (message.concertProduct)
            ShopConcertProduct_1.ShopConcertProduct.internalBinaryWrite(message.concertProduct, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RechargeReq
 */
exports.RechargeReq = new RechargeReq$Type();
