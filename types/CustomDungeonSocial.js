"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonSocial = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSocial$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonSocial", [
            { no: 3, name: "win_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "play_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "like_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "store_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { winNum: 0, playNum: 0, likeNum: 0, storeNum: 0 };
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
                case /* uint32 win_num */ 3:
                    message.winNum = reader.uint32();
                    break;
                case /* uint32 play_num */ 11:
                    message.playNum = reader.uint32();
                    break;
                case /* uint32 like_num */ 15:
                    message.likeNum = reader.uint32();
                    break;
                case /* uint32 store_num */ 14:
                    message.storeNum = reader.uint32();
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
        /* uint32 win_num = 3; */
        if (message.winNum !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.winNum);
        /* uint32 play_num = 11; */
        if (message.playNum !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.playNum);
        /* uint32 like_num = 15; */
        if (message.likeNum !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.likeNum);
        /* uint32 store_num = 14; */
        if (message.storeNum !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.storeNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonSocial
 */
exports.CustomDungeonSocial = new CustomDungeonSocial$Type();
