"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityActionSetBulletTrackTarget = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSetBulletTrackTarget$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityActionSetBulletTrackTarget", [
            { no: 10, name: "Unk3300_GKACKBIEOHK", kind: "scalar", jsonName: "Unk3300GKACKBIEOHK", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_HGBOFFKEPDJ", kind: "scalar", jsonName: "Unk3300HGBOFFKEPDJ", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GKACKBIEOHK: 0, unk3300HGBOFFKEPDJ: 0 };
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
                case /* uint32 Unk3300_GKACKBIEOHK = 10 [json_name = "Unk3300GKACKBIEOHK"];*/ 10:
                    message.unk3300GKACKBIEOHK = reader.uint32();
                    break;
                case /* uint32 Unk3300_HGBOFFKEPDJ = 4 [json_name = "Unk3300HGBOFFKEPDJ"];*/ 4:
                    message.unk3300HGBOFFKEPDJ = reader.uint32();
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
        /* uint32 Unk3300_GKACKBIEOHK = 10 [json_name = "Unk3300GKACKBIEOHK"]; */
        if (message.unk3300GKACKBIEOHK !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300GKACKBIEOHK);
        /* uint32 Unk3300_HGBOFFKEPDJ = 4 [json_name = "Unk3300HGBOFFKEPDJ"]; */
        if (message.unk3300HGBOFFKEPDJ !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300HGBOFFKEPDJ);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityActionSetBulletTrackTarget
 */
exports.AbilityActionSetBulletTrackTarget = new AbilityActionSetBulletTrackTarget$Type();
