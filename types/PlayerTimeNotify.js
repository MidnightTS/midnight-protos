"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerTimeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerTimeNotify", [
            { no: 12, name: "is_paused", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "player_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "server_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { isPaused: false, playerTime: 0n, serverTime: 0n };
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
                case /* bool is_paused */ 12:
                    message.isPaused = reader.bool();
                    break;
                case /* uint64 player_time */ 11:
                    message.playerTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 server_time */ 5:
                    message.serverTime = reader.uint64().toBigInt();
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
        /* bool is_paused = 12; */
        if (message.isPaused !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isPaused);
        /* uint64 player_time = 11; */
        if (message.playerTime !== 0n)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.playerTime);
        /* uint64 server_time = 5; */
        if (message.serverTime !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.serverTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerTimeNotify
 */
exports.PlayerTimeNotify = new PlayerTimeNotify$Type();
