"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinFireworksLauncher = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinFireworksLauncher$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinFireworksLauncher", [
            { no: 5, name: "Unk3300_FHGLEJNJIHK", kind: "scalar", jsonName: "Unk3300FHGLEJNJIHK", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_BFJBDJLAOJL", kind: "scalar", jsonName: "Unk3300BFJBDJLAOJL", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_LPPKOFHKCPH", kind: "scalar", jsonName: "Unk3300LPPKOFHKCPH", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_BDGCGLGNAIB", kind: "scalar", jsonName: "Unk3300BDGCGLGNAIB", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "fireworks_config", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "phase", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300FHGLEJNJIHK: 0, unk3300BFJBDJLAOJL: 0, unk3300LPPKOFHKCPH: 0, unk3300BDGCGLGNAIB: 0, fireworksConfig: [], phase: 0 };
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
                case /* uint32 Unk3300_FHGLEJNJIHK = 5 [json_name = "Unk3300FHGLEJNJIHK"];*/ 5:
                    message.unk3300FHGLEJNJIHK = reader.uint32();
                    break;
                case /* uint32 Unk3300_BFJBDJLAOJL = 4 [json_name = "Unk3300BFJBDJLAOJL"];*/ 4:
                    message.unk3300BFJBDJLAOJL = reader.uint32();
                    break;
                case /* uint32 Unk3300_LPPKOFHKCPH = 7 [json_name = "Unk3300LPPKOFHKCPH"];*/ 7:
                    message.unk3300LPPKOFHKCPH = reader.uint32();
                    break;
                case /* uint32 Unk3300_BDGCGLGNAIB = 3 [json_name = "Unk3300BDGCGLGNAIB"];*/ 3:
                    message.unk3300BDGCGLGNAIB = reader.uint32();
                    break;
                case /* repeated uint32 fireworks_config */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fireworksConfig.push(reader.uint32());
                    else
                        message.fireworksConfig.push(reader.uint32());
                    break;
                case /* uint32 phase */ 1:
                    message.phase = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_FHGLEJNJIHK = 5 [json_name = "Unk3300FHGLEJNJIHK"]; */
        if (message.unk3300FHGLEJNJIHK !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300FHGLEJNJIHK);
        /* uint32 Unk3300_BFJBDJLAOJL = 4 [json_name = "Unk3300BFJBDJLAOJL"]; */
        if (message.unk3300BFJBDJLAOJL !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300BFJBDJLAOJL);
        /* uint32 Unk3300_LPPKOFHKCPH = 7 [json_name = "Unk3300LPPKOFHKCPH"]; */
        if (message.unk3300LPPKOFHKCPH !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.unk3300LPPKOFHKCPH);
        /* uint32 Unk3300_BDGCGLGNAIB = 3 [json_name = "Unk3300BDGCGLGNAIB"]; */
        if (message.unk3300BDGCGLGNAIB !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.unk3300BDGCGLGNAIB);
        /* repeated uint32 fireworks_config = 12; */
        if (message.fireworksConfig.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fireworksConfig.length; i++)
                writer.uint32(message.fireworksConfig[i]);
            writer.join();
        }
        /* uint32 phase = 1; */
        if (message.phase !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.phase);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinFireworksLauncher
 */
exports.AbilityMixinFireworksLauncher = new AbilityMixinFireworksLauncher$Type();
