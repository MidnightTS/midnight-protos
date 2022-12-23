"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAvatarStaminaStepReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarStaminaStepReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneAvatarStaminaStepReq", [
            { no: 9, name: "use_client_rot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { useClientRot: false };
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
                case /* bool use_client_rot */ 9:
                    message.useClientRot = reader.bool();
                    break;
                case /* Vector rot */ 12:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* bool use_client_rot = 9; */
        if (message.useClientRot !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.useClientRot);
        /* Vector rot = 12; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneAvatarStaminaStepReq
 */
exports.SceneAvatarStaminaStepReq = new SceneAvatarStaminaStepReq$Type();
