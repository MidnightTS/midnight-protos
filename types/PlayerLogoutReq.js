"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLogoutReq = exports.PlayerLogoutReq_Reason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerLogoutReq.Reason
 */
var PlayerLogoutReq_Reason;
(function (PlayerLogoutReq_Reason) {
    /**
     * @generated from protobuf enum value: REASON_DISCONNECT = 0;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["DISCONNECT"] = 0] = "DISCONNECT";
    /**
     * @generated from protobuf enum value: REASON_CLIENT_REQ = 1;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["CLIENT_REQ"] = 1] = "CLIENT_REQ";
    /**
     * @generated from protobuf enum value: REASON_TIMEOUT = 2;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["TIMEOUT"] = 2] = "TIMEOUT";
    /**
     * @generated from protobuf enum value: REASON_ADMIN_REQ = 3;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["ADMIN_REQ"] = 3] = "ADMIN_REQ";
    /**
     * @generated from protobuf enum value: REASON_SERVER_CLOSE = 4;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["SERVER_CLOSE"] = 4] = "SERVER_CLOSE";
    /**
     * @generated from protobuf enum value: REASON_GM_CLEAR = 5;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["GM_CLEAR"] = 5] = "GM_CLEAR";
    /**
     * @generated from protobuf enum value: REASON_PLAYER_TRANSFER = 6;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["PLAYER_TRANSFER"] = 6] = "PLAYER_TRANSFER";
    /**
     * @generated from protobuf enum value: REASON_CLIENT_CHECKSUM_INVALID = 7;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["CLIENT_CHECKSUM_INVALID"] = 7] = "CLIENT_CHECKSUM_INVALID";
})(PlayerLogoutReq_Reason = exports.PlayerLogoutReq_Reason || (exports.PlayerLogoutReq_Reason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLogoutReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLogoutReq", [
            { no: 9, name: "reason", kind: "enum", T: () => ["PlayerLogoutReq.Reason", PlayerLogoutReq_Reason, "REASON_"] }
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
                case /* PlayerLogoutReq.Reason reason */ 9:
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
        /* PlayerLogoutReq.Reason reason = 9; */
        if (message.reason !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLogoutReq
 */
exports.PlayerLogoutReq = new PlayerLogoutReq$Type();
