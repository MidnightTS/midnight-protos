"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterHomeResultNotify = exports.PlayerApplyEnterHomeResultNotify_Reason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerApplyEnterHomeResultNotify.Reason
 */
var PlayerApplyEnterHomeResultNotify_Reason;
(function (PlayerApplyEnterHomeResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: REASON_PLAYER_JUDGE = 0;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_JUDGE"] = 0] = "PLAYER_JUDGE";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_ENTER_OPTION_REFUSE = 1;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_ENTER_OPTION_REFUSE"] = 1] = "PLAYER_ENTER_OPTION_REFUSE";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_ENTER_OPTION_DIRECT = 2;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_ENTER_OPTION_DIRECT"] = 2] = "PLAYER_ENTER_OPTION_DIRECT";
    /**
     * @generated from protobuf enum value: REASON_SYSTEM_JUDGE = 3;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["SYSTEM_JUDGE"] = 3] = "SYSTEM_JUDGE";
    /**
     * @generated from protobuf enum value: REASON_HOST_IN_MATCH = 4;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["HOST_IN_MATCH"] = 4] = "HOST_IN_MATCH";
    /**
     * @generated from protobuf enum value: REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 5;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PS_PLAYER_NOT_ACCEPT_OTHERS"] = 5] = "PS_PLAYER_NOT_ACCEPT_OTHERS";
    /**
     * @generated from protobuf enum value: REASON_OPEN_STATE_NOT_OPEN = 6;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["OPEN_STATE_NOT_OPEN"] = 6] = "OPEN_STATE_NOT_OPEN";
    /**
     * @generated from protobuf enum value: REASON_HOST_IN_EDIT_MODE = 7;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["HOST_IN_EDIT_MODE"] = 7] = "HOST_IN_EDIT_MODE";
    /**
     * @generated from protobuf enum value: REASON_PRIOR_CHECK = 8;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PRIOR_CHECK"] = 8] = "PRIOR_CHECK";
})(PlayerApplyEnterHomeResultNotify_Reason = exports.PlayerApplyEnterHomeResultNotify_Reason || (exports.PlayerApplyEnterHomeResultNotify_Reason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterHomeResultNotify", [
            { no: 9, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "target_nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "reason", kind: "enum", T: () => ["PlayerApplyEnterHomeResultNotify.Reason", PlayerApplyEnterHomeResultNotify_Reason, "REASON_"] }
        ]);
    }
    create(value) {
        const message = { targetUid: 0, targetNickname: "", isAgreed: false, reason: 0 };
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
                case /* uint32 target_uid */ 9:
                    message.targetUid = reader.uint32();
                    break;
                case /* string target_nickname */ 2:
                    message.targetNickname = reader.string();
                    break;
                case /* bool is_agreed */ 13:
                    message.isAgreed = reader.bool();
                    break;
                case /* PlayerApplyEnterHomeResultNotify.Reason reason */ 5:
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
        /* uint32 target_uid = 9; */
        if (message.targetUid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* string target_nickname = 2; */
        if (message.targetNickname !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetNickname);
        /* bool is_agreed = 13; */
        if (message.isAgreed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* PlayerApplyEnterHomeResultNotify.Reason reason = 5; */
        if (message.reason !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterHomeResultNotify
 */
exports.PlayerApplyEnterHomeResultNotify = new PlayerApplyEnterHomeResultNotify$Type();
