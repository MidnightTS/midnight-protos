"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuitFromHomeNotify = exports.PlayerQuitFromHomeNotify_QuitReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerQuitFromHomeNotify.QuitReason
 */
var PlayerQuitFromHomeNotify_QuitReason;
(function (PlayerQuitFromHomeNotify_QuitReason) {
    /**
     * @generated from protobuf enum value: QUIT_REASON_INVALID = 0;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: QUIT_REASON_KICK_BY_HOST = 1;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["KICK_BY_HOST"] = 1] = "KICK_BY_HOST";
    /**
     * @generated from protobuf enum value: QUIT_REASON_BACK_TO_MY_WORLD = 2;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["BACK_TO_MY_WORLD"] = 2] = "BACK_TO_MY_WORLD";
    /**
     * @generated from protobuf enum value: QUIT_REASON_HOME_BLOCKED = 3;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["HOME_BLOCKED"] = 3] = "HOME_BLOCKED";
    /**
     * @generated from protobuf enum value: QUIT_REASON_HOME_IN_EDIT_MODE = 4;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["HOME_IN_EDIT_MODE"] = 4] = "HOME_IN_EDIT_MODE";
    /**
     * @generated from protobuf enum value: QUIT_REASON_BY_MUIP = 5;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["BY_MUIP"] = 5] = "BY_MUIP";
    /**
     * @generated from protobuf enum value: QUIT_REASON_CUR_MODULE_CLOSED = 6;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["CUR_MODULE_CLOSED"] = 6] = "CUR_MODULE_CLOSED";
})(PlayerQuitFromHomeNotify_QuitReason = exports.PlayerQuitFromHomeNotify_QuitReason || (exports.PlayerQuitFromHomeNotify_QuitReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitFromHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerQuitFromHomeNotify", [
            { no: 11, name: "reason", kind: "enum", T: () => ["PlayerQuitFromHomeNotify.QuitReason", PlayerQuitFromHomeNotify_QuitReason, "QUIT_REASON_"] }
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
                case /* PlayerQuitFromHomeNotify.QuitReason reason */ 11:
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
        /* PlayerQuitFromHomeNotify.QuitReason reason = 11; */
        if (message.reason !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerQuitFromHomeNotify
 */
exports.PlayerQuitFromHomeNotify = new PlayerQuitFromHomeNotify$Type();
