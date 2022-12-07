"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterMpResultNotify = exports.PlayerApplyEnterMpResultNotify_Reason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerApplyEnterMpResultNotify.Reason
 */
var PlayerApplyEnterMpResultNotify_Reason;
(function (PlayerApplyEnterMpResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: REASON_PLAYER_JUDGE = 0;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_JUDGE"] = 0] = "PLAYER_JUDGE";
    /**
     * @generated from protobuf enum value: REASON_SCENE_CANNOT_ENTER = 1;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["SCENE_CANNOT_ENTER"] = 1] = "SCENE_CANNOT_ENTER";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_CANNOT_ENTER_MP = 2;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_CANNOT_ENTER_MP"] = 2] = "PLAYER_CANNOT_ENTER_MP";
    /**
     * @generated from protobuf enum value: REASON_SYSTEM_JUDGE = 3;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["SYSTEM_JUDGE"] = 3] = "SYSTEM_JUDGE";
    /**
     * @generated from protobuf enum value: REASON_ALLOW_ENTER_PLAYER_FULL = 4;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["ALLOW_ENTER_PLAYER_FULL"] = 4] = "ALLOW_ENTER_PLAYER_FULL";
    /**
     * @generated from protobuf enum value: REASON_WORLD_LEVEL_LOWER_THAN_HOST = 5;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["WORLD_LEVEL_LOWER_THAN_HOST"] = 5] = "WORLD_LEVEL_LOWER_THAN_HOST";
    /**
     * @generated from protobuf enum value: REASON_HOST_IN_MATCH = 6;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["HOST_IN_MATCH"] = 6] = "HOST_IN_MATCH";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_IN_BLACKLIST = 7;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_IN_BLACKLIST"] = 7] = "PLAYER_IN_BLACKLIST";
    /**
     * @generated from protobuf enum value: REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 8;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PS_PLAYER_NOT_ACCEPT_OTHERS"] = 8] = "PS_PLAYER_NOT_ACCEPT_OTHERS";
    /**
     * @generated from protobuf enum value: REASON_HOST_IS_BLOCKED = 9;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["HOST_IS_BLOCKED"] = 9] = "HOST_IS_BLOCKED";
    /**
     * @generated from protobuf enum value: REASON_OTHER_DATA_VERSION_NOT_LATEST = 10;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["OTHER_DATA_VERSION_NOT_LATEST"] = 10] = "OTHER_DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: REASON_DATA_VERSION_NOT_LATEST = 11;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["DATA_VERSION_NOT_LATEST"] = 11] = "DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_NOT_IN_PLAYER_WORLD = 12;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_NOT_IN_PLAYER_WORLD"] = 12] = "PLAYER_NOT_IN_PLAYER_WORLD";
    /**
     * @generated from protobuf enum value: REASON_MAX_PLAYER = 13;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["MAX_PLAYER"] = 13] = "MAX_PLAYER";
})(PlayerApplyEnterMpResultNotify_Reason = exports.PlayerApplyEnterMpResultNotify_Reason || (exports.PlayerApplyEnterMpResultNotify_Reason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterMpResultNotify", [
            { no: 10, name: "reason", kind: "enum", T: () => ["PlayerApplyEnterMpResultNotify.Reason", PlayerApplyEnterMpResultNotify_Reason, "REASON_"] },
            { no: 5, name: "target_nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, targetNickname: "", isAgreed: false, targetUid: 0 };
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
                case /* PlayerApplyEnterMpResultNotify.Reason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* string target_nickname */ 5:
                    message.targetNickname = reader.string();
                    break;
                case /* bool is_agreed */ 2:
                    message.isAgreed = reader.bool();
                    break;
                case /* uint32 target_uid */ 4:
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
        /* PlayerApplyEnterMpResultNotify.Reason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* string target_nickname = 5; */
        if (message.targetNickname !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.targetNickname);
        /* bool is_agreed = 2; */
        if (message.isAgreed !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* uint32 target_uid = 4; */
        if (message.targetUid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterMpResultNotify
 */
exports.PlayerApplyEnterMpResultNotify = new PlayerApplyEnterMpResultNotify$Type();
