"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGGameCreateFailReasonNotify = exports.GCGGameCreateFailReasonNotify_GCGGameCreateReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum GCGGameCreateFailReasonNotify.GCGGameCreateReason
 */
var GCGGameCreateFailReasonNotify_GCGGameCreateReason;
(function (GCGGameCreateFailReasonNotify_GCGGameCreateReason) {
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_NONE = 0;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_NONE"] = 0] = "GCG_GAME_CREATE_REASON_NONE";
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_GAME_MAX = 1;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_GAME_MAX"] = 1] = "GCG_GAME_CREATE_REASON_GAME_MAX";
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_CLIENT_VERSION_NOT_LATEST = 2;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_CLIENT_VERSION_NOT_LATEST"] = 2] = "GCG_GAME_CREATE_REASON_CLIENT_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_RESOURCE_NOT_COMPLETE = 3;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_RESOURCE_NOT_COMPLETE"] = 3] = "GCG_GAME_CREATE_REASON_RESOURCE_NOT_COMPLETE";
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_TIMEOUT = 4;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_TIMEOUT"] = 4] = "GCG_GAME_CREATE_REASON_TIMEOUT";
    /**
     * @generated from protobuf enum value: GCG_GAME_CREATE_REASON_Unk3300_EMCDFGGFFAH = 5;
     */
    GCGGameCreateFailReasonNotify_GCGGameCreateReason[GCGGameCreateFailReasonNotify_GCGGameCreateReason["GCG_GAME_CREATE_REASON_Unk3300_EMCDFGGFFAH"] = 5] = "GCG_GAME_CREATE_REASON_Unk3300_EMCDFGGFFAH";
})(GCGGameCreateFailReasonNotify_GCGGameCreateReason = exports.GCGGameCreateFailReasonNotify_GCGGameCreateReason || (exports.GCGGameCreateFailReasonNotify_GCGGameCreateReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GCGGameCreateFailReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGGameCreateFailReasonNotify", [
            { no: 7, name: "reason", kind: "enum", T: () => ["GCGGameCreateFailReasonNotify.GCGGameCreateReason", GCGGameCreateFailReasonNotify_GCGGameCreateReason] }
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
                case /* GCGGameCreateFailReasonNotify.GCGGameCreateReason reason */ 7:
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
        /* GCGGameCreateFailReasonNotify.GCGGameCreateReason reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGGameCreateFailReasonNotify
 */
exports.GCGGameCreateFailReasonNotify = new GCGGameCreateFailReasonNotify$Type();
