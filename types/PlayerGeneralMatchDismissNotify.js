"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGeneralMatchDismissNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchReason_1 = require("./MatchReason");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGeneralMatchDismissNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerGeneralMatchDismissNotify", [
            { no: 11, name: "reason", kind: "enum", T: () => ["MatchReason", MatchReason_1.MatchReason, "MATCH_REASON_"] },
            { no: 10, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, uidList: [], matchId: 0 };
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
                case /* MatchReason reason */ 11:
                    message.reason = reader.int32();
                    break;
                case /* repeated uint32 uid_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* uint32 match_id */ 3:
                    message.matchId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* MatchReason reason = 11; */
        if (message.reason !== 0)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.reason);
        /* repeated uint32 uid_list = 10; */
        if (message.uidList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* uint32 match_id = 3; */
        if (message.matchId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerGeneralMatchDismissNotify
 */
exports.PlayerGeneralMatchDismissNotify = new PlayerGeneralMatchDismissNotify$Type();
