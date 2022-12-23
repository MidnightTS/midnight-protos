"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityFightPropChangeReasonNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChangeEnergyReason_1 = require("./ChangeEnergyReason");
const ChangeHpReason_1 = require("./ChangeHpReason");
const PropChangeReason_1 = require("./PropChangeReason");
// @generated message type with reflection information, may provide speed optimized methods
class EntityFightPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityFightPropChangeReasonNotify", [
            { no: 5, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reason", kind: "enum", T: () => ["PropChangeReason", PropChangeReason_1.PropChangeReason, "PROP_CHANGE_REASON_"] },
            { no: 9, name: "change_hp_reason", kind: "enum", T: () => ["ChangeHpReason", ChangeHpReason_1.ChangeHpReason, "CHANGE_HP_REASON_"] },
            { no: 12, name: "change_energy_reason", kind: "enum", T: () => ["ChangeEnergyReason", ChangeEnergyReason_1.ChangeEnergyReason, "CHANGE_ENERGY_REASON_"] },
            { no: 10, name: "prop_delta", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { propType: 0, paramList: [], entityId: 0, reason: 0, changeHpReason: 0, changeEnergyReason: 0, propDelta: 0 };
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
                case /* uint32 prop_type */ 5:
                    message.propType = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* PropChangeReason reason */ 2:
                    message.reason = reader.int32();
                    break;
                case /* ChangeHpReason change_hp_reason */ 9:
                    message.changeHpReason = reader.int32();
                    break;
                case /* ChangeEnergyReason change_energy_reason */ 12:
                    message.changeEnergyReason = reader.int32();
                    break;
                case /* float prop_delta */ 10:
                    message.propDelta = reader.float();
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
        /* uint32 prop_type = 5; */
        if (message.propType !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.propType);
        /* repeated uint32 param_list = 7; */
        if (message.paramList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        /* PropChangeReason reason = 2; */
        if (message.reason !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.reason);
        /* ChangeHpReason change_hp_reason = 9; */
        if (message.changeHpReason !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.changeHpReason);
        /* ChangeEnergyReason change_energy_reason = 12; */
        if (message.changeEnergyReason !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.changeEnergyReason);
        /* float prop_delta = 10; */
        if (message.propDelta !== 0)
            writer.tag(10, runtime_2.WireType.Bit32).float(message.propDelta);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityFightPropChangeReasonNotify
 */
exports.EntityFightPropChangeReasonNotify = new EntityFightPropChangeReasonNotify$Type();
