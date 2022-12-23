"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FurnitureMakeInfo_1 = require("./FurnitureMakeInfo");
const FurnitureMakeBeHelpedData_1 = require("./FurnitureMakeBeHelpedData");
const FurnitureMakeHelpData_1 = require("./FurnitureMakeHelpData");
const FurnitureMakeSlot_1 = require("./FurnitureMakeSlot");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeRsp", [
            { no: 13, name: "furniture_make_slot", kind: "message", T: () => FurnitureMakeSlot_1.FurnitureMakeSlot },
            { no: 4, name: "help_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FurnitureMakeHelpData_1.FurnitureMakeHelpData },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "helped_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData },
            { no: 7, name: "make_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FurnitureMakeInfo_1.FurnitureMakeInfo }
        ]);
    }
    create(value) {
        const message = { helpDataList: [], retcode: 0, helpedDataList: [], makeInfoList: [] };
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
                case /* FurnitureMakeSlot furniture_make_slot */ 13:
                    message.furnitureMakeSlot = FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* repeated FurnitureMakeHelpData help_data_list */ 4:
                    message.helpDataList.push(FurnitureMakeHelpData_1.FurnitureMakeHelpData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated FurnitureMakeBeHelpedData helped_data_list */ 6:
                    message.helpedDataList.push(FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated FurnitureMakeInfo make_info_list */ 7:
                    message.makeInfoList.push(FurnitureMakeInfo_1.FurnitureMakeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* FurnitureMakeSlot furniture_make_slot = 13; */
        if (message.furnitureMakeSlot)
            FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated FurnitureMakeHelpData help_data_list = 4; */
        for (let i = 0; i < message.helpDataList.length; i++)
            FurnitureMakeHelpData_1.FurnitureMakeHelpData.internalBinaryWrite(message.helpDataList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated FurnitureMakeBeHelpedData helped_data_list = 6; */
        for (let i = 0; i < message.helpedDataList.length; i++)
            FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData.internalBinaryWrite(message.helpedDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated FurnitureMakeInfo make_info_list = 7; */
        for (let i = 0; i < message.makeInfoList.length; i++)
            FurnitureMakeInfo_1.FurnitureMakeInfo.internalBinaryWrite(message.makeInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeRsp
 */
exports.FurnitureMakeRsp = new FurnitureMakeRsp$Type();
