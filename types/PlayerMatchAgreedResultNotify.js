"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMatchAgreedResultNotify = exports.PlayerMatchAgreedResultNotify_Reason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
/**
 * @generated from protobuf enum PlayerMatchAgreedResultNotify.Reason
 */
var PlayerMatchAgreedResultNotify_Reason;
(function (PlayerMatchAgreedResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: REASON_SUCC = 0;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["SUCC"] = 0] = "SUCC";
    /**
     * @generated from protobuf enum value: REASON_TARGET_SCENE_CANNOT_ENTER = 1;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["TARGET_SCENE_CANNOT_ENTER"] = 1] = "TARGET_SCENE_CANNOT_ENTER";
    /**
     * @generated from protobuf enum value: REASON_SELF_MP_UNAVAILABLE = 2;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["SELF_MP_UNAVAILABLE"] = 2] = "SELF_MP_UNAVAILABLE";
    /**
     * @generated from protobuf enum value: REASON_OTHER_DATA_VERSION_NOT_LATEST = 3;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["OTHER_DATA_VERSION_NOT_LATEST"] = 3] = "OTHER_DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: REASON_DATA_VERSION_NOT_LATEST = 4;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["DATA_VERSION_NOT_LATEST"] = 4] = "DATA_VERSION_NOT_LATEST";
})(PlayerMatchAgreedResultNotify_Reason = exports.PlayerMatchAgreedResultNotify_Reason || (exports.PlayerMatchAgreedResultNotify_Reason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchAgreedResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerMatchAgreedResultNotify", [
            { no: 12, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 4, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "reason", kind: "enum", T: () => ["PlayerMatchAgreedResultNotify.Reason", PlayerMatchAgreedResultNotify_Reason, "REASON_"] }
        ]);
    }
    create(value) {
        const message = { matchType: 0, targetUid: 0, reason: 0 };
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
                case /* MatchType match_type */ 12:
                    message.matchType = reader.int32();
                    break;
                case /* uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
                    break;
                case /* PlayerMatchAgreedResultNotify.Reason reason */ 13:
                    message.reason = reader.int32();
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
        /* MatchType match_type = 12; */
        if (message.matchType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.matchType);
        /* uint32 target_uid = 4; */
        if (message.targetUid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* PlayerMatchAgreedResultNotify.Reason reason = 13; */
        if (message.reason !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerMatchAgreedResultNotify
 */
exports.PlayerMatchAgreedResultNotify = new PlayerMatchAgreedResultNotify$Type();
