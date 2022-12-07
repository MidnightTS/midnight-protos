"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponPromoteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WeaponPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WeaponPromoteRsp", [
            { no: 4, name: "Unk3300_GGFCIPAKKDP", kind: "scalar", jsonName: "Unk3300GGFCIPAKKDP", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "Unk3300_MBEBIACJNBB", kind: "scalar", jsonName: "Unk3300MBEBIACJNBB", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GGFCIPAKKDP: 0, targetWeaponGuid: 0n, unk3300MBEBIACJNBB: 0, retcode: 0 };
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
                case /* uint32 Unk3300_GGFCIPAKKDP = 4 [json_name = "Unk3300GGFCIPAKKDP"];*/ 4:
                    message.unk3300GGFCIPAKKDP = reader.uint32();
                    break;
                case /* uint64 target_weapon_guid */ 11:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_MBEBIACJNBB = 5 [json_name = "Unk3300MBEBIACJNBB"];*/ 5:
                    message.unk3300MBEBIACJNBB = reader.uint32();
                    break;
                case /* int32 retcode */ 8:
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
        /* uint32 Unk3300_GGFCIPAKKDP = 4 [json_name = "Unk3300GGFCIPAKKDP"]; */
        if (message.unk3300GGFCIPAKKDP !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300GGFCIPAKKDP);
        /* uint64 target_weapon_guid = 11; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* uint32 Unk3300_MBEBIACJNBB = 5 [json_name = "Unk3300MBEBIACJNBB"]; */
        if (message.unk3300MBEBIACJNBB !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300MBEBIACJNBB);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponPromoteRsp
 */
exports.WeaponPromoteRsp = new WeaponPromoteRsp$Type();
