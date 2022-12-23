"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerConfirmMatchReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerConfirmMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerConfirmMatchReq", [
            { no: 3, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 14, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { matchType: 0, isAgreed: false };
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
                case /* MatchType match_type */ 3:
                    message.matchType = reader.int32();
                    break;
                case /* bool is_agreed */ 14:
                    message.isAgreed = reader.bool();
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
        /* MatchType match_type = 3; */
        if (message.matchType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.matchType);
        /* bool is_agreed = 14; */
        if (message.isAgreed !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerConfirmMatchReq
 */
exports.PlayerConfirmMatchReq = new PlayerConfirmMatchReq$Type();
