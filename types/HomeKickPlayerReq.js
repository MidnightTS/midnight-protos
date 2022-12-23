"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeKickPlayerReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeKickPlayerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeKickPlayerReq", [
            { no: 14, name: "is_kick_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isKickAll: false, targetUid: 0 };
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
                case /* bool is_kick_all */ 14:
                    message.isKickAll = reader.bool();
                    break;
                case /* uint32 target_uid */ 2:
                    message.targetUid = reader.uint32();
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
        /* bool is_kick_all = 14; */
        if (message.isKickAll !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isKickAll);
        /* uint32 target_uid = 2; */
        if (message.targetUid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeKickPlayerReq
 */
exports.HomeKickPlayerReq = new HomeKickPlayerReq$Type();
