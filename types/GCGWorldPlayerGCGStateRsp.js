"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGWorldPlayerGCGStateRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGPlayerGCGState_1 = require("./GCGPlayerGCGState");
// @generated message type with reflection information, may provide speed optimized methods
class GCGWorldPlayerGCGStateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGWorldPlayerGCGStateRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "player_state", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPlayerGCGState_1.GCGPlayerGCGState }
        ]);
    }
    create(value) {
        const message = { retcode: 0, playerState: [] };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated GCGPlayerGCGState player_state */ 2:
                    message.playerState.push(GCGPlayerGCGState_1.GCGPlayerGCGState.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated GCGPlayerGCGState player_state = 2; */
        for (let i = 0; i < message.playerState.length; i++)
            GCGPlayerGCGState_1.GCGPlayerGCGState.internalBinaryWrite(message.playerState[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGWorldPlayerGCGStateRsp
 */
exports.GCGWorldPlayerGCGStateRsp = new GCGWorldPlayerGCGStateRsp$Type();
