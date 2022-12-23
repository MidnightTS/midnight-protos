"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGameTimeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGameTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerGameTimeNotify", [
            { no: 15, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_home", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "game_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, isHome: false, gameTime: 0 };
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
                case /* uint32 uid */ 15:
                    message.uid = reader.uint32();
                    break;
                case /* bool is_home */ 10:
                    message.isHome = reader.bool();
                    break;
                case /* uint32 game_time */ 4:
                    message.gameTime = reader.uint32();
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
        /* uint32 uid = 15; */
        if (message.uid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.uid);
        /* bool is_home = 10; */
        if (message.isHome !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isHome);
        /* uint32 game_time = 4; */
        if (message.gameTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerGameTimeNotify
 */
exports.PlayerGameTimeNotify = new PlayerGameTimeNotify$Type();
