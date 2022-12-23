"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAvatarStaminaStepRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarStaminaStepRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneAvatarStaminaStepRsp", [
            { no: 1, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 9, name: "use_client_rot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { useClientRot: false, retcode: 0 };
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
                case /* Vector rot */ 1:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* bool use_client_rot */ 9:
                    message.useClientRot = reader.bool();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
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
        /* Vector rot = 1; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool use_client_rot = 9; */
        if (message.useClientRot !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.useClientRot);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneAvatarStaminaStepRsp
 */
exports.SceneAvatarStaminaStepRsp = new SceneAvatarStaminaStepRsp$Type();
