"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerMonthlyCombatRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerFightRecordPair_1 = require("./TowerFightRecordPair");
// @generated message type with reflection information, may provide speed optimized methods
class TowerMonthlyCombatRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerMonthlyCombatRecord", [
            { no: 3, name: "most_reveal_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerFightRecordPair_1.TowerFightRecordPair },
            { no: 8, name: "Unk3300_EIGEGOGFJND", kind: "message", jsonName: "Unk3300EIGEGOGFJND", T: () => TowerFightRecordPair_1.TowerFightRecordPair },
            { no: 2, name: "Unk3300_OALLHJPBOHO", kind: "message", jsonName: "Unk3300OALLHJPBOHO", T: () => TowerFightRecordPair_1.TowerFightRecordPair },
            { no: 14, name: "Unk3300_KMCLPHEDNCJ", kind: "message", jsonName: "Unk3300KMCLPHEDNCJ", T: () => TowerFightRecordPair_1.TowerFightRecordPair },
            { no: 7, name: "Unk3300_KIKPMNPKLDG", kind: "message", jsonName: "Unk3300KIKPMNPKLDG", T: () => TowerFightRecordPair_1.TowerFightRecordPair },
            { no: 15, name: "Unk3300_CCFHOFCIEPF", kind: "message", jsonName: "Unk3300CCFHOFCIEPF", T: () => TowerFightRecordPair_1.TowerFightRecordPair }
        ]);
    }
    create(value) {
        const message = { mostRevealAvatarList: [] };
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
                case /* repeated TowerFightRecordPair most_reveal_avatar_list */ 3:
                    message.mostRevealAvatarList.push(TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* TowerFightRecordPair Unk3300_EIGEGOGFJND = 8 [json_name = "Unk3300EIGEGOGFJND"];*/ 8:
                    message.unk3300EIGEGOGFJND = TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EIGEGOGFJND);
                    break;
                case /* TowerFightRecordPair Unk3300_OALLHJPBOHO = 2 [json_name = "Unk3300OALLHJPBOHO"];*/ 2:
                    message.unk3300OALLHJPBOHO = TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.unk3300OALLHJPBOHO);
                    break;
                case /* TowerFightRecordPair Unk3300_KMCLPHEDNCJ = 14 [json_name = "Unk3300KMCLPHEDNCJ"];*/ 14:
                    message.unk3300KMCLPHEDNCJ = TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.unk3300KMCLPHEDNCJ);
                    break;
                case /* TowerFightRecordPair Unk3300_KIKPMNPKLDG = 7 [json_name = "Unk3300KIKPMNPKLDG"];*/ 7:
                    message.unk3300KIKPMNPKLDG = TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.unk3300KIKPMNPKLDG);
                    break;
                case /* TowerFightRecordPair Unk3300_CCFHOFCIEPF = 15 [json_name = "Unk3300CCFHOFCIEPF"];*/ 15:
                    message.unk3300CCFHOFCIEPF = TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.unk3300CCFHOFCIEPF);
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
        /* repeated TowerFightRecordPair most_reveal_avatar_list = 3; */
        for (let i = 0; i < message.mostRevealAvatarList.length; i++)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.mostRevealAvatarList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerFightRecordPair Unk3300_EIGEGOGFJND = 8 [json_name = "Unk3300EIGEGOGFJND"]; */
        if (message.unk3300EIGEGOGFJND)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.unk3300EIGEGOGFJND, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerFightRecordPair Unk3300_OALLHJPBOHO = 2 [json_name = "Unk3300OALLHJPBOHO"]; */
        if (message.unk3300OALLHJPBOHO)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.unk3300OALLHJPBOHO, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerFightRecordPair Unk3300_KMCLPHEDNCJ = 14 [json_name = "Unk3300KMCLPHEDNCJ"]; */
        if (message.unk3300KMCLPHEDNCJ)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.unk3300KMCLPHEDNCJ, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerFightRecordPair Unk3300_KIKPMNPKLDG = 7 [json_name = "Unk3300KIKPMNPKLDG"]; */
        if (message.unk3300KIKPMNPKLDG)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.unk3300KIKPMNPKLDG, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerFightRecordPair Unk3300_CCFHOFCIEPF = 15 [json_name = "Unk3300CCFHOFCIEPF"]; */
        if (message.unk3300CCFHOFCIEPF)
            TowerFightRecordPair_1.TowerFightRecordPair.internalBinaryWrite(message.unk3300CCFHOFCIEPF, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerMonthlyCombatRecord
 */
exports.TowerMonthlyCombatRecord = new TowerMonthlyCombatRecord$Type();
