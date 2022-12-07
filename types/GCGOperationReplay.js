"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGOperationReplay = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGReplayControllerData_1 = require("./GCGReplayControllerData");
const GCGReplayOperationData_1 = require("./GCGReplayOperationData");
const Unk3300_PPKPCOCOMDH_1 = require("./Unk3300_PPKPCOCOMDH");
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReplay$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGOperationReplay", [
            { no: 6, name: "Unk3300_FKBLJIMBHEA", kind: "message", jsonName: "Unk3300FKBLJIMBHEA", repeat: 1 /*RepeatType.PACKED*/, T: () => Unk3300_PPKPCOCOMDH_1.Unk3300_PPKPCOCOMDH },
            { no: 1, name: "seed", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "operation_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGReplayOperationData_1.GCGReplayOperationData },
            { no: 2, name: "game_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "controller_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGReplayControllerData_1.GCGReplayControllerData }
        ]);
    }
    create(value) {
        const message = { unk3300FKBLJIMBHEA: [], seed: 0, operationDataList: [], gameId: 0, controllerDataList: [] };
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
                case /* repeated Unk3300_PPKPCOCOMDH Unk3300_FKBLJIMBHEA = 6 [json_name = "Unk3300FKBLJIMBHEA"];*/ 6:
                    message.unk3300FKBLJIMBHEA.push(Unk3300_PPKPCOCOMDH_1.Unk3300_PPKPCOCOMDH.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 seed */ 1:
                    message.seed = reader.uint32();
                    break;
                case /* repeated GCGReplayOperationData operation_data_list */ 8:
                    message.operationDataList.push(GCGReplayOperationData_1.GCGReplayOperationData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 game_id */ 2:
                    message.gameId = reader.uint32();
                    break;
                case /* repeated GCGReplayControllerData controller_data_list */ 7:
                    message.controllerDataList.push(GCGReplayControllerData_1.GCGReplayControllerData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated Unk3300_PPKPCOCOMDH Unk3300_FKBLJIMBHEA = 6 [json_name = "Unk3300FKBLJIMBHEA"]; */
        for (let i = 0; i < message.unk3300FKBLJIMBHEA.length; i++)
            Unk3300_PPKPCOCOMDH_1.Unk3300_PPKPCOCOMDH.internalBinaryWrite(message.unk3300FKBLJIMBHEA[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 seed = 1; */
        if (message.seed !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.seed);
        /* repeated GCGReplayOperationData operation_data_list = 8; */
        for (let i = 0; i < message.operationDataList.length; i++)
            GCGReplayOperationData_1.GCGReplayOperationData.internalBinaryWrite(message.operationDataList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 game_id = 2; */
        if (message.gameId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gameId);
        /* repeated GCGReplayControllerData controller_data_list = 7; */
        for (let i = 0; i < message.controllerDataList.length; i++)
            GCGReplayControllerData_1.GCGReplayControllerData.internalBinaryWrite(message.controllerDataList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationReplay
 */
exports.GCGOperationReplay = new GCGOperationReplay$Type();
