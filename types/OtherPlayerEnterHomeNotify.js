"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherPlayerEnterHomeNotify = exports.OtherPlayerEnterHomeNotify_Reason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum OtherPlayerEnterHomeNotify.Reason
 */
var OtherPlayerEnterHomeNotify_Reason;
(function (OtherPlayerEnterHomeNotify_Reason) {
    /**
     * @generated from protobuf enum value: REASON_INVALID = 0;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: REASON_ENTER = 1;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["ENTER"] = 1] = "ENTER";
    /**
     * @generated from protobuf enum value: REASON_LEAVE = 2;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["LEAVE"] = 2] = "LEAVE";
})(OtherPlayerEnterHomeNotify_Reason = exports.OtherPlayerEnterHomeNotify_Reason || (exports.OtherPlayerEnterHomeNotify_Reason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class OtherPlayerEnterHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("OtherPlayerEnterHomeNotify", [
            { no: 5, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "reason", kind: "enum", T: () => ["OtherPlayerEnterHomeNotify.Reason", OtherPlayerEnterHomeNotify_Reason, "REASON_"] }
        ]);
    }
    create(value) {
        const message = { nickname: "", reason: 0 };
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
                case /* string nickname */ 5:
                    message.nickname = reader.string();
                    break;
                case /* OtherPlayerEnterHomeNotify.Reason reason */ 10:
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
        /* string nickname = 5; */
        if (message.nickname !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* OtherPlayerEnterHomeNotify.Reason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OtherPlayerEnterHomeNotify
 */
exports.OtherPlayerEnterHomeNotify = new OtherPlayerEnterHomeNotify$Type();
