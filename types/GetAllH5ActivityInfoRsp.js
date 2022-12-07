"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllH5ActivityInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const H5ActivityInfo_1 = require("./H5ActivityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetAllH5ActivityInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetAllH5ActivityInfoRsp", [
            { no: 3, name: "client_red_dot_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "h5_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => H5ActivityInfo_1.H5ActivityInfo },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { clientRedDotTimestamp: 0, h5ActivityInfoList: [], retcode: 0 };
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
                case /* uint32 client_red_dot_timestamp */ 3:
                    message.clientRedDotTimestamp = reader.uint32();
                    break;
                case /* repeated H5ActivityInfo h5_activity_info_list */ 5:
                    message.h5ActivityInfoList.push(H5ActivityInfo_1.H5ActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 14:
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
        /* uint32 client_red_dot_timestamp = 3; */
        if (message.clientRedDotTimestamp !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.clientRedDotTimestamp);
        /* repeated H5ActivityInfo h5_activity_info_list = 5; */
        for (let i = 0; i < message.h5ActivityInfoList.length; i++)
            H5ActivityInfo_1.H5ActivityInfo.internalBinaryWrite(message.h5ActivityInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllH5ActivityInfoRsp
 */
exports.GetAllH5ActivityInfoRsp = new GetAllH5ActivityInfoRsp$Type();
