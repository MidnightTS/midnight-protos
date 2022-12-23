"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicusLevelupGearRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusLevelupGearRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("MechanicusLevelupGearRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "gear_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mechanicus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "after_gear_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, gearId: 0, mechanicusId: 0, afterGearLevel: 0 };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 gear_id */ 9:
                    message.gearId = reader.uint32();
                    break;
                case /* uint32 mechanicus_id */ 4:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* uint32 after_gear_level */ 12:
                    message.afterGearLevel = reader.uint32();
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 gear_id = 9; */
        if (message.gearId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gearId);
        /* uint32 mechanicus_id = 4; */
        if (message.mechanicusId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.mechanicusId);
        /* uint32 after_gear_level = 12; */
        if (message.afterGearLevel !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.afterGearLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MechanicusLevelupGearRsp
 */
exports.MechanicusLevelupGearRsp = new MechanicusLevelupGearRsp$Type();
