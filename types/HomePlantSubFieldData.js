"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePlantSubFieldData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomePlantFieldStatus_1 = require("./HomePlantFieldStatus");
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSubFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomePlantSubFieldData", [
            { no: 5, name: "field_status", kind: "enum", T: () => ["HomePlantFieldStatus", HomePlantFieldStatus_1.HomePlantFieldStatus, "HOME_PLANT_FIELD_STATUS_"] },
            { no: 7, name: "home_gather_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 9, name: "seed_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fieldStatus: 0, homeGatherId: 0, entityIdList: [], endTime: 0, seedId: 0 };
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
                case /* HomePlantFieldStatus field_status */ 5:
                    message.fieldStatus = reader.int32();
                    break;
                case /* uint32 home_gather_id */ 7:
                    message.homeGatherId = reader.uint32();
                    break;
                case /* repeated uint32 entity_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                case /* fixed32 end_time */ 6:
                    message.endTime = reader.fixed32();
                    break;
                case /* uint32 seed_id */ 9:
                    message.seedId = reader.uint32();
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
        /* HomePlantFieldStatus field_status = 5; */
        if (message.fieldStatus !== 0)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.fieldStatus);
        /* uint32 home_gather_id = 7; */
        if (message.homeGatherId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.homeGatherId);
        /* repeated uint32 entity_id_list = 12; */
        if (message.entityIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        /* fixed32 end_time = 6; */
        if (message.endTime !== 0)
            writer.tag(6, runtime_2.WireType.Bit32).fixed32(message.endTime);
        /* uint32 seed_id = 9; */
        if (message.seedId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.seedId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePlantSubFieldData
 */
exports.HomePlantSubFieldData = new HomePlantSubFieldData$Type();
