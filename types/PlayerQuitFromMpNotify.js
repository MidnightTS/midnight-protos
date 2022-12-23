"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuitFromMpNotify = exports.PlayerQuitFromMpNotify_QuitReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerQuitFromMpNotify.QuitReason
 */
var PlayerQuitFromMpNotify_QuitReason;
(function (PlayerQuitFromMpNotify_QuitReason) {
    /**
     * @generated from protobuf enum value: QUIT_REASON_INVALID = 0;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: QUIT_REASON_HOST_NO_OTHER_PLAYER = 1;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["HOST_NO_OTHER_PLAYER"] = 1] = "HOST_NO_OTHER_PLAYER";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_HOST = 2;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST"] = 2] = "KICK_BY_HOST";
    /**
     * @generated from protobuf enum value: QUIT_REASON_BACK_TO_MY_WORLD = 3;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["BACK_TO_MY_WORLD"] = 3] = "BACK_TO_MY_WORLD";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_HOST_LOGOUT = 4;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_LOGOUT"] = 4] = "KICK_BY_HOST_LOGOUT";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_HOST_BLOCK = 5;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_BLOCK"] = 5] = "KICK_BY_HOST_BLOCK";
    /**
     * @generated from protobuf enum value: QUIT_REASON_BE_BLOCKED = 6;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["BE_BLOCKED"] = 6] = "BE_BLOCKED";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_HOST_ENTER_HOME = 7;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_ENTER_HOME"] = 7] = "KICK_BY_HOST_ENTER_HOME";
    /**
     * @generated from protobuf enum value: QUIT_REASON_HOST_SCENE_INVALID = 8;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["HOST_SCENE_INVALID"] = 8] = "HOST_SCENE_INVALID";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_PLAY = 9;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_PLAY"] = 9] = "KICK_BY_PLAY";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED = 10;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED"] = 10] = "KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED";
})(PlayerQuitFromMpNotify_QuitReason = exports.PlayerQuitFromMpNotify_QuitReason || (exports.PlayerQuitFromMpNotify_QuitReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitFromMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerQuitFromMpNotify", [
            { no: 2, name: "reason", kind: "enum", T: () => ["PlayerQuitFromMpNotify.QuitReason", PlayerQuitFromMpNotify_QuitReason, "QUIT_REASON_"] }
        ]);
    }
    create(value) {
        const message = { reason: 0 };
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
                case /* PlayerQuitFromMpNotify.QuitReason reason */ 2:
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
        /* PlayerQuitFromMpNotify.QuitReason reason = 2; */
        if (message.reason !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerQuitFromMpNotify
 */
exports.PlayerQuitFromMpNotify = new PlayerQuitFromMpNotify$Type();
