"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerBriefDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TowerBriefDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerBriefDataNotify", [
            { no: 6, name: "Unk3300_OLBDJEGPDFE", kind: "scalar", jsonName: "Unk3300OLBDJEGPDFE", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_ILDODKDADMI", kind: "scalar", jsonName: "Unk3300ILDODKDADMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_finished_entrance_floor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_CFKJBOIJDBD", kind: "scalar", jsonName: "Unk3300CFKJBOIJDBD", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "tower_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KGHOIIAEIHH", kind: "scalar", jsonName: "Unk3300KGHOIIAEIHH", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_CNMMBJABMKA", kind: "scalar", jsonName: "Unk3300CNMMBJABMKA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300OLBDJEGPDFE: 0, unk3300ILDODKDADMI: 0, isFinishedEntranceFloor: false, unk3300CFKJBOIJDBD: 0, towerScheduleId: 0, unk3300KGHOIIAEIHH: 0, unk3300CNMMBJABMKA: 0 };
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
                case /* uint32 Unk3300_OLBDJEGPDFE = 6 [json_name = "Unk3300OLBDJEGPDFE"];*/ 6:
                    message.unk3300OLBDJEGPDFE = reader.uint32();
                    break;
                case /* uint32 Unk3300_ILDODKDADMI = 9 [json_name = "Unk3300ILDODKDADMI"];*/ 9:
                    message.unk3300ILDODKDADMI = reader.uint32();
                    break;
                case /* bool is_finished_entrance_floor */ 14:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* uint32 Unk3300_CFKJBOIJDBD = 1 [json_name = "Unk3300CFKJBOIJDBD"];*/ 1:
                    message.unk3300CFKJBOIJDBD = reader.uint32();
                    break;
                case /* uint32 tower_schedule_id */ 11:
                    message.towerScheduleId = reader.uint32();
                    break;
                case /* uint32 Unk3300_KGHOIIAEIHH = 8 [json_name = "Unk3300KGHOIIAEIHH"];*/ 8:
                    message.unk3300KGHOIIAEIHH = reader.uint32();
                    break;
                case /* uint32 Unk3300_CNMMBJABMKA = 7 [json_name = "Unk3300CNMMBJABMKA"];*/ 7:
                    message.unk3300CNMMBJABMKA = reader.uint32();
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
        /* uint32 Unk3300_OLBDJEGPDFE = 6 [json_name = "Unk3300OLBDJEGPDFE"]; */
        if (message.unk3300OLBDJEGPDFE !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300OLBDJEGPDFE);
        /* uint32 Unk3300_ILDODKDADMI = 9 [json_name = "Unk3300ILDODKDADMI"]; */
        if (message.unk3300ILDODKDADMI !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300ILDODKDADMI);
        /* bool is_finished_entrance_floor = 14; */
        if (message.isFinishedEntranceFloor !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* uint32 Unk3300_CFKJBOIJDBD = 1 [json_name = "Unk3300CFKJBOIJDBD"]; */
        if (message.unk3300CFKJBOIJDBD !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300CFKJBOIJDBD);
        /* uint32 tower_schedule_id = 11; */
        if (message.towerScheduleId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.towerScheduleId);
        /* uint32 Unk3300_KGHOIIAEIHH = 8 [json_name = "Unk3300KGHOIIAEIHH"]; */
        if (message.unk3300KGHOIIAEIHH !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300KGHOIIAEIHH);
        /* uint32 Unk3300_CNMMBJABMKA = 7 [json_name = "Unk3300CNMMBJABMKA"]; */
        if (message.unk3300CNMMBJABMKA !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300CNMMBJABMKA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerBriefDataNotify
 */
exports.TowerBriefDataNotify = new TowerBriefDataNotify$Type();
