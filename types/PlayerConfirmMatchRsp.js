"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerConfirmMatchRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerConfirmMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerConfirmMatchRsp", [
            { no: 10, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAgreed: false, matchType: 0, retcode: 0, matchId: 0 };
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
                case /* bool is_agreed */ 10:
                    message.isAgreed = reader.bool();
                    break;
                case /* MatchType match_type */ 1:
                    message.matchType = reader.int32();
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 match_id */ 5:
                    message.matchId = reader.uint32();
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
        /* bool is_agreed = 10; */
        if (message.isAgreed !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* MatchType match_type = 1; */
        if (message.matchType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.matchType);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 match_id = 5; */
        if (message.matchId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerConfirmMatchRsp
 */
exports.PlayerConfirmMatchRsp = new PlayerConfirmMatchRsp$Type();
