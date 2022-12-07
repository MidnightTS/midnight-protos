"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutSyncFinishGame = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutSyncFinishGame$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutSyncFinishGame", [
            { no: 8, name: "server_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "is_win", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_stop_gallery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { serverGameTime: 0n, isWin: false, isStopGallery: false };
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
                case /* uint64 server_game_time */ 8:
                    message.serverGameTime = reader.uint64().toBigInt();
                    break;
                case /* bool is_win */ 1:
                    message.isWin = reader.bool();
                    break;
                case /* bool is_stop_gallery */ 2:
                    message.isStopGallery = reader.bool();
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
        /* uint64 server_game_time = 8; */
        if (message.serverGameTime !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.serverGameTime);
        /* bool is_win = 1; */
        if (message.isWin !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isWin);
        /* bool is_stop_gallery = 2; */
        if (message.isStopGallery !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isStopGallery);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutSyncFinishGame
 */
exports.BreakoutSyncFinishGame = new BreakoutSyncFinishGame$Type();
